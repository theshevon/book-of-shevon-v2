import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocaleContext } from '../../util/localisation/locale_provider';
import { updateDocumentHeader } from '../../util/title_manager';
import { Text } from './../../ui/text/text';
import { getRandomNumInRange } from './../../util/math';
import { CARDS_SPRITE } from './cards_sprite';
import { ErrorMessages as Messages } from './error.messages';
import styles from './error.module.css';

const POSITION_UPDATE_FREQ_PER_S = 60;
const POSITION_UPDATE_INTERVAL = 2000 / POSITION_UPDATE_FREQ_PER_S;

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

  const { locale } = useLocaleContext();

  const image = useMemo(() => {
    const img = new Image();
    img.src = CARDS_SPRITE;
    return img;
  }, []);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [canvasWidth, setCanvasWidth] = useState<number>();
  const [canvasHeight, setCanvasHeight] = useState<number>();
  const [_cards, setCards] = useState<Card[]>(Array.from({ length: getRandomNumInRange(MIN_INITIAL_CARDS, MAX_INITIAL_CARDS)  }, () => {
    return new Card(
      image,
      Math.floor(Math.random() * (N_CARDS_IN_DECK - 1)),
      Math.random() * window.innerWidth,
      -CARD_HEIGHT,
    );
  }));

  const addSingleCard = useCallback((x: number, y: number) => {
    setCards(cards => [
      ...cards,
      new Card(
        image,
        Math.floor(Math.random() * (N_CARDS_IN_DECK - 1)),
        x,
        y,
      ),
    ]);
  }, [image]);

  const updateCards = useCallback((canvas: HTMLCanvasElement, renderingCtx: CanvasRenderingContext2D) => {
    setCards(cards => cards.filter(card => {
      card.updatePosition(canvas.height);
      card.draw(renderingCtx);
      return card.isActiveWithinCanvas(canvas.width);
    }));
  }, []);

  const updateCanvasSize = useCallback(() => {
    setCanvasWidth(window.innerWidth);
    setCanvasHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    updateDocumentHeader(Messages.pageTitle[locale]);

    const canvas = canvasRef.current;
    const renderingCtx = canvas?.getContext('2d');

    const cardAdditionLoop = setInterval(() => {
      addSingleCard(Math.random() * window.innerWidth, -CARD_HEIGHT);
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
    };
  }, [locale, addSingleCard, updateCards, updateCanvasSize]);

  return (
    <div
        className={styles.errorPage}
    >
      <div
          className={styles.errorMsgContainer}
      >
        <Text.Large
            className={styles.errorMsg}
        >
          { Messages.errorMsgTitle[locale] }
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
};
