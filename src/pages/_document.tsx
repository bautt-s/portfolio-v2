import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/favicon/apple-touch-icon" />
                <title>Bautista Sánchez</title>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
