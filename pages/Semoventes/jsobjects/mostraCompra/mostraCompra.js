export default {
	mostraCompra(){
		if (Forma_AquisicaoCopy.selectedOptionLabel == 'Compra'){
			Valor_Compra.setVisibility(true)
		} else {
			Valor_Compra.setVisibility(false)
		}
	}
}