import Image from "next/image";

export default async function Home() {
    let campos = []
    const response = await fetch("http://localhost:3000/api", {
        next: {
            revalidate: 1
        }
    });

    campos = await response.json();
    if (campos[0] == null) {
        return (
            <p>bruh</p>
        )
    } else {




        return (
            <div>
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
                    .campus-container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                    }
                    .campus-card {
                        flex: 0 0 calc(33.33% - 20px);
                        border: 1px solid #ddd;
                        padding: 10px;
                        margin-bottom: 20px;
                        border-radius: 5px;
                    }
                    .campus-card img {
                        margin-right: 10px;
                    }
                    .campus-card p {
                        margin: 0;
                    }
                `}
                </style>
                <head>
                    <title>Página Inicial</title>
                </head>

                <div className="header">
                    <h1>Bem-vindo à nossa página inicial!</h1>
                </div>

                <div className="content">
                    <p>Esta é uma página inicial simples. Você pode adicionar mais conteúdo conforme necessário.</p>
                </div>

                <div className="campus-container">
                    {campos.map((campi) => (
                        <div className="campus-card" key={campi.id}>
                            <Image width={100} height={100} src={campi.imagem_url} alt={campi.nome_campi} />
                            <p>{campi.nome_campi}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}