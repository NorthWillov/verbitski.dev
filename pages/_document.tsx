import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="dark:bg-gray-900 transition duration-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
