import Document, { Html, Head, Main, NextScript } from "next/document"
import { extractCritical } from "@emotion/server"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const page = ctx.renderPage()
    const styles = extractCritical(page.html)
    return { ...initialProps, ...page, ...styles }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <style
            //@ts-ignore
            data-emotion-css={this.props.ids.join(" ")}
            //@ts-ignore
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
