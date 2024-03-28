export default {
	
	caesAtivos (data) {
		
       let caesAtivosTransformados = data.data.data
            .filter(u => u.Status_geral === "Operacional")
            .map(obj => ({ label: obj.Nome, value: obj.id }));

        return caesAtivosTransformados;
	},
	consultasDeUmCao(todasConsultas,idAnimal) {
		
		const consultasDoAnimal = todasConsultas.data.data.filter(consulta => consulta.animal && consulta.animal.id === idAnimal && consulta.removido === false);
	
      

        return consultasDoAnimal;
	}
}

