export const formattingCPF = (cpf: string) => {
  cpf.replace(/[^\d]/g, "");

  do {
    cpf = cpf.length < 11 ? "0" + cpf : cpf;
  } while (cpf.length < 11);

  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}