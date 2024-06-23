import { defineConfig } from 'orval'

export default defineConfig({
  greeingWeb: {
    input: {
      // target: 'https://port-0-greeing-api-ss7z32llwultj9i.sel5.cloudtype.app/v3/api-docs',
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
