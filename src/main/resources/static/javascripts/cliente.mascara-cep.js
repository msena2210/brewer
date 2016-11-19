var Brewer = Brewer || {};

Brewer.MascaraCep = (function(){
	
		function MascaraCep(){
			this.cep = $('.js-cep');
			this.labelcep = $('[for=Cep]');
			this.imputcep = $('#Cep');
		}
		
		MascaraCep.prototype.iniciar = function(){
			 this.cep.on('change', onCepAlterado.bind(this));
		}
		
		function onCepAlterado(evento){
			  var cepInformado = $(evento.currentTarget);
			  this.labelcep.text( cepInformado.data('CEP'));
			  this.imputcep.mask(cepInformado.data('mascara'));
			   
			  /*  console.log('evento',evento)
			   console.log('Meu documento cep', cepInformado.data('CEP'))
		*/
		}
	    
		return MascaraCep;
}())


$(function(){
	var mascaraCep = new Brewer.MascaraCep();
	mascaraCep.iniciar();
	
});