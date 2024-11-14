
# Secretaria Virtual - App Android de Gestão de Atendimentos

O **Secretaria Virtual** é um aplicativo Android desenvolvido em **React Native**. Ele é voltado para profissionais autônomos, como psicólogos, médicos e professores, oferecendo uma plataforma prática para gerenciar atendimentos, consultas e comunicação com clientes.

## Funcionalidades Principais

- **Login e Registro**: Tela de autenticação com login e registro de novos usuários.
- **Dashboard**: Tela inicial com acesso rápido às principais funcionalidades, como perfil, pagamentos, consultas e prontuários.
- **Perfil do Usuário**: Permite visualização e atualização dos dados do usuário, como nome, endereço, email e telefone.
- **Pagamentos**: Exibe detalhes de pagamentos realizados.
- **Consultas**: Facilita a criação e atualização de consultas e compromissos.
- **Prontuários**: Acesso a históricos de atendimento dos clientes.
- **Notificações Automáticas**: Envia lembretes de consultas para reduzir ausências.

## Tecnologias Utilizadas

- **Frontend**: React Native
- **Bibliotecas**: `@react-navigation/native` para navegação, `axios` para chamadas de API, entre outras conforme necessário.

## Estrutura do Projeto

- **`src/pages`**: Contém as telas principais, como `Login`, `Register`, `Dashboard`, etc.
- **`src/services`**: Serviços auxiliares, como `authService` para autenticação e `api` para integração com o backend.
  
## Como Rodar o Projeto

### Pré-requisitos

- **Node.js**: Recomendado instalar a versão mais recente.
- **React Native CLI**: Instale com o comando `npm install -g react-native-cli`.
- **Emulador Android** ou **dispositivo físico** para testar o aplicativo.

### Passo a Passo

1. Clone o repositório:
    ```bash
    git clone https://github.com/lucaspco/SecretariaVirtual-Android.git
    cd SecretariaVirtual-Android
    ```

2. Instale as dependências do projeto:
    ```bash
    npm install
    ```

3. Inicie o aplicativo em um emulador Android ou dispositivo físico:
    ```bash
    npx react-native run-android
    ```

4. Certifique-se de que o backend Java esteja em execução para acessar todas as funcionalidades do app.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.
