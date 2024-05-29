export function generateCatPage({ url: cat }) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cat Image</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                }
            </style>
        </head>
        <body>
            <h1>Here is a cat for you!</h1>
            <img src="${cat}" alt="A cute cat" style="max-width: 100%; height: 500px;">
        </body>
        </html>
    `;
}

