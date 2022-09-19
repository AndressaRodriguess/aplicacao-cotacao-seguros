module.exports = {
  cotarSeguro(bem, valor) {
    const quantidade_parcelas = 10;
    return {
        bem: bem,
        valor_do_bem: valor,
        valor_total_seguro: valor * 0.08,
        quantidade_parcelas: quantidade_parcelas,
        valor_parcela_seguro: (valor * 0.08)/quantidade_parcelas
    }
  }
}