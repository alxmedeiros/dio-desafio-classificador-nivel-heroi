class Hero {
  name: string;
  exp: number;

  constructor(name: string, exp: number) {
    this.name = name
    this.exp = exp
  }

  gainExp(amount: number) {
    this.exp += amount
  }

  level() {
    if (this.exp <= 1000) {
      return 'Ferro'
    } else if (this.exp > 1000 && this.exp <= 2000) {
      return 'Bronze'
    } else if (this.exp > 2000 && this.exp <= 5000) {
      return 'Prata'
    } else if (this.exp > 5000 && this.exp <= 7000) {
      return 'Ouro'
    } else if (this.exp > 7000 && this.exp <= 8000) {
      return 'Platina'
    } else if (this.exp > 8000 && this.exp <= 9000) {
      return 'Ascendente'
    } else if (this.exp > 9000 && this.exp <= 10000) {
      return 'Imortal'
    } else {
      return 'Radiante'
    }
  }

  toString() {
    return `O herói de nome ${this.name} está no nível de ${this.level()}.`
  }
}

export default Hero
