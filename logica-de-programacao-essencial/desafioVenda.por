programa
{
	
	funcao inicio()
	{
		real vendaJan,vendaFev,vendaMar,vendaAbr,media
		cadeia vendedor

		escreva("Digite o nome do vendedor:")
		leia(vendedor)
		escreva("Digite o valor da venda de Jan:")
		leia(vendaJan)
		escreva("Digite o valor da venda de Fev:")
		leia(vendaFev)
		escreva("Digite o valor da venda de Mar:")
		leia(vendaMar)
		escreva("Digite o valor da venda de Jan:")
		leia(vendaAbr)

		media = (vendaJan+vendaFev+vendaMar+vendaAbr)/4

		escreva("O vendedor " + vendedor + " obteve a media: " + media + " em vendas neste periodo.")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 33; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */