const accuracyOrder = (postulants) => {
  const orderedPostulants = postulants
  
  for (let i = 0; i < postulants.length - 1; i++) {
    for (let j = 0; j < postulants.length - i - 1; j++) {
      if (postulants[j].accuracy < postulants[j + 1].accuracy) {
        let temp = postulants[j];
        postulants[j] = postulants[j + 1];
        postulants[j + 1] = temp;
      }
    }
  }
  return postulants
}

export default accuracyOrder;
