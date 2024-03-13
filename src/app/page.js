import Image from "next/image";

export default async function Home() {
    const response = await fetch("http://localhost:3000/api", {
        next: {
            revalidate: 1
        }
    });

    const campus = await response.json();

    return (
        <div>
            <head>
                <title>Página Inicial</title>
                <style>{`
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
                    .campus-card {
                        display: flex;
                        align-items: center;
                        border: 1px solid #ddd;
                        padding: 10px;
                        margin-bottom: 10px;
                        border-radius: 5px;
                    }
                    .campus-card img {
                        margin-right: 10px;
                    }
                    .campus-card p {
                        margin: 0;
                    }
                `}</style>
            </head>

            <div className="header">
                <h1>Bem-vindo à nossa página inicial!</h1>
            </div>

            <div className="content">
                <p>Esta é uma página inicial simples. Você pode adicionar mais conteúdo conforme necessário.</p>
            </div>

            {campus.map((campi) => (
                <div className="campus-card" key={campi.id}>
                    <Image width={100} height={100} src={campi.imagem_url} alt={campi.nome_campi} />
                    <p>{campi.nome_campi}</p>
                </div>
            ))}
        </div>
    );
};