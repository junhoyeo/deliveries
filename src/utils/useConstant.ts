import { useMemo } from 'react';

export default function useConstant<T>(builder: () => T): T {
  return useMemo<any>(builder, []);
}
