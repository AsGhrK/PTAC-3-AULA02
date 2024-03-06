
export default async function Home() {

  return (
    <div>
    <head>
        <title>Página Inicial</title>
        <style>
            {`
                body {
                    font-family: Arial, sans-serif;
                }
                .header {
                    text-align: center;
                    padding: 10px;
                    background-color: #f8f9fa;
                }
                .content {
                    margin: 20px;
                }
            `}
        </style>
    </head>

        <div className="header">
            <h1>Bem-vindo à nossa página inicial!</h1>
        </div>
        <div className="content">
            <p>Esta é uma página inicial simples. Você pode adicionar mais conteúdo conforme necessário.</p>
        </div>
</div>
);
};

