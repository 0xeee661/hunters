import type { CodegenConfig } from '@graphql-codegen/cli'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`]:
      {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
      },
  },
  documents: 'graphql/queries.ts',
  generates: {
    'types/graphql/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
