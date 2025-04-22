let DOMPurify: any = null;

export const sanitizeHtml = (dirty: string): string => {
  if (typeof window === "undefined") {
    // We're on the server — use jsdom
    const { JSDOM } = require("jsdom");
    const createDOMPurify = require("dompurify");
    const window = new JSDOM("").window;
    DOMPurify = createDOMPurify(window);
    return DOMPurify.sanitize(dirty, {
      ALLOWED_TAGS: [
        "p",
        "strong",
        "em",
        "u",
        "ol",
        "ul",
        "li",
        "br",
        "h1",
        "h2",
        "h3",
      ],
      ALLOWED_ATTR: [],
    });
  } else {
    // On the client — use a no-op or optional client sanitization if needed
    return dirty;
  }
};
