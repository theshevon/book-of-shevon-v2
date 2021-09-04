import React, { useRef, useEffect, useState } from 'react';

import { Text } from './../../ui/text/text';
import { ErrorMessages as Messages } from './error.messages';

import styles from './error.module.css';
import { CARDS_SPRITE } from './cards_sprite';

const POSITION_UPDATE_FREQ_PER_S = 60;
const POSITION_UPDATE_INTERVAL = 1000 / POSITION_UPDATE_FREQ_PER_S;

const N_INITIAL_CARDS = 10; 
const AUTO_ADDITION_UPDATE_INTERVAL = 2000;

const N_CARDS_IN_DECK = 52;
const CARD_WIDTH = 71;
const CARD_WIDTH_HALF = CARD_WIDTH / 2;
const CARD_HEIGHT = 96;
const CARD_HEIGHT_HALF = CARD_HEIGHT / 2;

class Card {
  
  private x: number;
  private y: number;
  private dx: number;
  private dy: number;
  private image: HTMLImageElement;
  private sx: number;
  private sy: number;

  constructor(id: number, x: number, y: number, dx: number, dy: number, image: HTMLImageElement) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.image = image;
    this.sx = (id % 4) * CARD_WIDTH;
    this.sy = Math.floor(id / 4) * CARD_HEIGHT;
  }

  updatePosition(canvasHeight: number) {
    this.x += this.dx;
    this.y += this.dy;

    if (this.y > canvasHeight - CARD_HEIGHT_HALF) {
      this.y = canvasHeight - CARD_HEIGHT_HALF;
      this.dy = -(this.dy *  0.85);
    }

    this.dy += 0.98;
  }
 
  isOutOfView(canvasWidth: number) {
    return this.x < -CARD_WIDTH_HALF || this.x > (canvasWidth + CARD_WIDTH_HALF);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx?.drawImage(
      this.image,
      this.sx,
      this.sy,
      CARD_WIDTH,
      CARD_HEIGHT,
      Math.floor(this.x - CARD_WIDTH_HALF),
      Math.floor(this.y - CARD_HEIGHT_HALF),
      CARD_WIDTH,
      CARD_HEIGHT,
    );
  }
}

export const Error = () => {

  const image = new Image();
  image.src = CARDS_SPRITE;

  const errorPageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [canvasWidth, setCanvasWidth] = useState<number>();
  const [canvasHeight, setCanvasHeight] = useState<number>();
  const [cards, setCards] = useState<Card[]>(Array.from({ length: N_INITIAL_CARDS }, () => {
    return new Card(
      Math.floor(Math.random() * (N_CARDS_IN_DECK - 1)),
      Math.random() * window.innerWidth,
      -CARD_HEIGHT,
      Math.floor(Math.random() * 6 - 3 ) * 2,
      -Math.random() * 16,
      image,
    );
  }));

  const addSingleCard = (x: number, y: number) => {
    setCards([
      ...cards,
      new Card(
        Math.floor(Math.random() * (N_CARDS_IN_DECK - 1)),
        x,
        y,
        Math.floor(Math.random() * 6 - 3 ) * 2,
        -Math.random() * 16, 
        image
      ),
    ]);
  }

  const updateCards = (canvas: HTMLCanvasElement, renderingCtx: CanvasRenderingContext2D) => {

    // update card positions
    for (let i=0; i<cards.length; i++) {
      const card = cards[i];
      card.updatePosition(canvas.height);
      if (!card.isOutOfView(canvas.width)) {
        card.draw(renderingCtx);
      }
    }

    // remove all cards that are out of the view
    for (let i=0; i<cards.length; i++) {
      const cardsStillInView = cards.filter(card => !card.isOutOfView(canvas.width));
      if (cardsStillInView.length !== cards.length) {
        setCards(cardsStillInView);
      }
    }
  }

  const updateCanvasSize = () => {
    const errorPageDiv =  errorPageRef.current;
    if (!errorPageDiv) {
      return;
    }
    setCanvasWidth(errorPageDiv.clientWidth);
    setCanvasHeight(errorPageDiv.clientHeight);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderingCtx = canvas?.getContext('2d');
    
    const cardAdditionLoop = setInterval(() => {
      addSingleCard(Math.random() * (canvasWidth || window.innerWidth), -CARD_HEIGHT);
    }, AUTO_ADDITION_UPDATE_INTERVAL);

    const cardUpdateLoop = setInterval(() => {
      if (!(canvas && renderingCtx)) return;
      updateCards(canvas, renderingCtx);
    }, POSITION_UPDATE_INTERVAL);

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    return () => {
      clearInterval(cardAdditionLoop);
      clearInterval(cardUpdateLoop);
      window.removeEventListener('resize', updateCanvasSize);
    }
  }, [cards]);

  return (
    <div
        ref={errorPageRef}
        className={styles.errorPage}
    >
      <div
          className={styles.errorMsgContainer}
      >
        <Text.Large
            className={styles.errorMsg}
        >
          {Messages.errorMsgTitle()}
        </Text.Large>
      </div>
      <canvas
          ref={canvasRef}
          onClick={e => addSingleCard(e.clientX, e.clientY)}
          className={styles.canvas}
          width={canvasWidth}
          height={canvasHeight}
      >    
      </canvas>
    </div>
  );
}
