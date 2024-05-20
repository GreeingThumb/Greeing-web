import { defineConfig } from 'orval'

export default defineConfig({
  greeingWeb: {
    input: {
      target: 'http://localhost:8080/v3/api-docs',
    },
    output: {
      mode: 'tags-split',
      target: 'src/entities/api',
      schemas: 'src/entities/model',
      client: 'react-query',
      prettier: true,
      tsconfig: 'tsconfig.json',
      override: {
        mutator: {
          path: 'src/shared/api/orvalAxiosInstance.ts',
          name: 'customAxiosInstanceForOrval',
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'prettier --config ./.prettierrc.js --write',
    },
  },
})
