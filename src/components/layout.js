import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const header = isRootPath ? (
    <h1 className="main-heading">
      <Link to="/">{title}</Link>
    </h1>
  ) : (
    <Link className="header-link-home" to="/">
      {title}
    </Link>
  )

  const data = useStaticQuery(graphql`
    query AuthorQuery {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `)
  const author = data.site.siteMetadata?.author

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {author?.name} {new Date().getFullYear()}. All rights reserved.
      </footer>
    </div>
  )
}

export default Layout
