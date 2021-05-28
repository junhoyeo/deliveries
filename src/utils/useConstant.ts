import { useMemo } from 'react';

export default function useConstant<T>(builder: () => T): T {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useMemo<any>(builder, []);
}
