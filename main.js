// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(specimenNum, dna){
  return {
    specimenNum,
    dna,
    mutate() {
      let index = Math.floor(Math.random() * this.dna.length)
      let randomDNA = this.dna[index]
      let bases = ['A', 'T', 'C', 'G']

      let i = bases.findIndex(ele => ele==randomDNA)
      bases.splice(i,1)

      let randBase = bases[Math.floor(Math.random() * 3)]

      this.dna.splice(index,1,randBase)
      return this.dna
    },
    compareDNA(pAequor) {
      let count = 0;

      for(let i=0;i<this.dna.length;i++){
        if(this.dna[i] == pAequor.dna[i])
         count++
      }
      let percent = (count/this.dna.length) * 100
      let fixed = percent.toFixed(2)
      console.log(`specimen #1 and specimen #2 have ${fixed}% DNA in common`)

    },
    willLikelySurvive() {
      let count = 0;
      for(base of this.dna){
        if(base=='C' || base=='G')
          count++
      }
      if(count/this.dna.length >= 0.6)
        return true
      else
        return false
      
    },
    complementStrand() {
      let complementStrand = []
      for(base of this.dna){
        switch(base){
          case 'C':
            complementStrand.push('G')
            break
          case 'G':
            complementStrand.push('C')
            break
          case 'A':
            complementStrand.push('T')
            break
          case 'T':
            complementStrand.push('A')
            break
        }
      }
      return complementStrand
    }


  }
}
const pAequor1 = pAequorFactory(1, mockUpStrand())
const pAequor2 = pAequorFactory(2, mockUpStrand())
const pAequor3 = pAequorFactory(3, mockUpStrand())

console.log(pAequor1.dna)
console.log(pAequor1.complementStrand()); 







