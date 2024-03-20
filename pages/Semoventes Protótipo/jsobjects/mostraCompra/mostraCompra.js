export default {
	mostraCompra(){
		if (Forma_Aquisicao.selectedOptionLabel == 'Compra'){
			Valor_Compra.setVisibility(true)
		} else {
			Valor_Compra.setVisibility(false)
		}
	}
}