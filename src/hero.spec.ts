import { beforeEach, describe, expect, test } from 'vitest'
import Hero from './hero'

const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

describe('Testing Hero class', () => {

  let hero: Hero

  beforeEach(() => {
    hero = new Hero('Hero Test', 0)
  })

  test('Should create a Hero instance', () => {
    expect(hero).toBeInstanceOf(Hero)
  })

  test('Should have a name property of type string', () => {
    expect(typeof hero.name).toBe('string')
  })

  test('Should have a exp property of type number', () => {
    expect(typeof hero.exp).toBe('number')
  })

  test('Should increase exp when gainExp is called', () => {
    const initialExp = hero.exp
    const expToAdd = 100

    hero.gainExp(100)

    expect(hero.exp).toBe(initialExp + expToAdd)
  })

  test('Check if Hero has Ferro level', () => {
    hero.gainExp(getRandomNumber(1, 1000))

    expect(hero.level()).toBe('Ferro')
  })

  test('Check if Hero has Bronze level', () => {
    hero.gainExp(getRandomNumber(1001, 2000))

    expect(hero.level()).toBe('Bronze')
  })

  test('Check if Hero has Prata level', () => {
    hero.gainExp(getRandomNumber(2001, 5000))

    expect(hero.level()).toBe('Prata')
  })

  test('Check if Hero has Ouro level', () => {
    hero.gainExp(getRandomNumber(5001, 7000))

    expect(hero.level()).toBe('Ouro')
  })

  test('Check if Hero has Platina level', () => {
    hero.gainExp(getRandomNumber(7001, 8000))

    expect(hero.level()).toBe('Platina')
  })

  test('Check if Hero has Ascendente level', () => {
    hero.gainExp(getRandomNumber(8001, 9000))

    expect(hero.level()).toBe('Ascendente')
  })

  test('Check if Hero has Imortal level', () => {
    hero.gainExp(getRandomNumber(9001, 10000))

    expect(hero.level()).toBe('Imortal')
  })

  test('Check if Hero has Radiante level', () => {
    hero.gainExp(getRandomNumber(10001, 20000))

    expect(hero.level()).toBe('Radiante')
  })

})


