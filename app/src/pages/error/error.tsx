import React, { useRef, useEffect, useState } from 'react';

import { Text } from './../../ui/text/text';
import { ErrorMessages as Messages } from './error.messages';

import styles from './error.module.css';
import { CARDS_SPRITE } from './cards_sprite';
import { getRandomNumInRange } from './../../util/math';
import { useDocumentHeader } from '../../util/hooks';

const POSITION_UPDATE_FREQ_PER_S = 60;
const POSITION_UPDATE_INTERVAL = 1000 / POSITION_UPDATE_FREQ_PER_S;

const MIN_INITIAL_CARDS = 10;
const MAX_INITIAL_CARDS = 20; 
const AUTO_ADDITION_UPDATE_INTERVAL = 2000;

const N_CARDS_IN_DECK = 52;
const N_SUITES = 4;

const CARD_WIDTH = 71;
const CARD_WIDTH_HALF = CARD_WIDTH / 2;
const CARD_HEIGHT = 96;
const CARD_HEIGHT_HALF = CARD_HEIGHT / 2;

const MAX_INITIAL_UPWARD_ACC = -16;
const GRAVITATIONAL_ACC = 0.98;
const REBOUND_FORCE_MULTIPLIER = -0.85;
const MIN_HORIZONTAL_ACC = 6;
const MAX_HORIZONTAL_ACC = -6;

/**
 * This implementation is based on the Winning Solitaire implementation by Ricardo Cabello
 * (https://mrdoob.com/lab/javascript/effects/solitaire/)
 */
class Card {
  
  private image: HTMLImageElement;
  private currX: number;
  private currY: number;
  private prevX: number;
  private prevY: number;
  private dx: number;
  private dy: number;
  private sx: number;
  private sy: number;

  constructor(image: HTMLImageElement, id: number, x: number, y: number) {
    this.image = image;
    this.currX = x;
    this.currY = y;
    this.prevX = x;
    this.prevY = y;
    this.dx = getRandomNumInRange(MIN_HORIZONTAL_ACC, MAX_HORIZONTAL_ACC);
    this.dy = Math.random() * MAX_INITIAL_UPWARD_ACC;
    this.sx = (id % N_SUITES) * CARD_WIDTH;
    this.sy = Math.floor(id / N_SUITES) * CARD_HEIGHT;
  }

  updatePosition(canvasHeight: number) {
    this.prevX = this.currX;
    this.prevY = this.currY;

    this.currX += this.dx;
    this.currY += this.dy;

    if (this.currY > canvasHeight - CARD_HEIGHT_HALF) {
      this.currY = canvasHeight - CARD_HEIGHT_HALF;
      this.dy = this.dy * REBOUND_FORCE_MULTIPLIER;
    }

    this.dy += GRAVITATIONAL_ACC; 
  }
 
  isActiveWithinCanvas(canvasWidth: number) {
    const isOutOfView = this.currX < -CARD_WIDTH_HALF || this.currX > (canvasWidth + CARD_WIDTH_HALF);
    const hasStoppedMoving = this.currX === this.prevX && this.currY === this.prevY;
    return !(isOutOfView || hasStoppedMoving);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx?.drawImage(
      this.image,
      this.sx,
      this.sy,
      CARD_WIDTH,
      CARD_HEIGHT,
      Math.floor(this.currX - CARD_WIDTH_HALF),
      Math.floor(this.currY - CARD_HEIGHT_HALF),
      CARD_WIDTH,
      CARD_HEIGHT,
    );
  }
}

export const Error = () => {

  const image = new Image();
  image.src = CARDS_SPRITE;

  useDocumentHeader(Messages.pageTitle());

  const errorPageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [canvasWidth, setCanvasWidth] = useState<number>();
  const [canvasHeight, setCanvasHeight] = useState<number>();
  const [cards, setCards] = useState<Card[]>(Array.from({ length: getRandomNumInRange(MIN_INITIAL_CARDS, MAX_INITIAL_CARDS)  }, () => {
    return new Card(
      image,
      Math.floor(Math.random() * (N_CARDS_IN_DECK - 1)),
      Math.random() * window.innerWidth,
      -CARD_HEIGHT,
    );
  }));

  const addSingleCard = (x: number, y: number) => {
    setCards([
      ...cards,
      new Card(
        image,
        Math.floor(Math.random() * (N_CARDS_IN_DECK - 1)),
        x,
        y,
      ),
    ]);
  }

  const updateCards = (canvas: HTMLCanvasElement, renderingCtx: CanvasRenderingContext2D) => {

    // update card positions
    for (let i=0; i<cards.length; i++) {
      const card = cards[i];
      card.updatePosition(canvas.height);
      if (card.isActiveWithinCanvas(canvas.width)) {
        card.draw(renderingCtx);
      }
    }

    // remove all cards that are out of the view
    for (let i=0; i<cards.length; i++) {
      const activeCards = cards.filter(card => card.isActiveWithinCanvas(canvas.width));
      if (activeCards.length !== cards.length) {
        setCards(activeCards);
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
