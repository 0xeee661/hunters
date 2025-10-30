import type { TypedDocumentNode } from '@graphql-typed-document-node/core'

export function getGqlString(doc: TypedDocumentNode) {
  return doc?.loc && doc.loc.source.body
}
