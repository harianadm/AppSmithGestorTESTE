export default {
  calcula() {
		
    let tratamentosMedicos = get_animal_tratamento_medico.data || [];
    // Array para armazenar os períodos de dias
    //Iterar sobre os resultados de get_animal_tratamento_medico
    tratamentosMedicos.data.forEach(tratamento => {
      const dataInicio = new Date(tratamento.animal.Data_nascimento);
      const dataAtual = new Date();
      const diferencaEmAnos = dataAtual.getFullYear() - dataInicio.getFullYear();
      // Calcular o período de dias entre data de início e data de término
      if (
        dataInicio.getMonth() > dataAtual.getMonth() ||
        (dataInicio.getMonth() === dataAtual.getMonth() && dataInicio.getDate() > dataAtual.getDate())
      ) {
				tratamento.animal.Idade = diferencaEmAnos - 1;
      }
    });
		return tratamentosMedicos;
  }
};
