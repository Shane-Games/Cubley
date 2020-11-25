declare module 'cubeley' {
  type ColorList = {
    Black: string;
    Red: string;
    Green: string;
    Yellow: string;
    Blue: string;
    Magenta: string;
    Cyan: string;
    White: string;
  }

  interface Cubeley {
    colors: {
      info: string;
      debug: string;
      warn: string;
      error: string;

      underscore: string;
      reset: string;
	
      foreground: ColorList;
	
      background: ColorList;
    };

    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
    debug: (message: string) => void;

    custom(prefix: string, message: string, color: string): void;
    close(): void;
  }

  const c: Cubeley;

  export default c;
}
