import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: 'h1jlprhu',
    dataset: 'production',
    apiVersion: '2021-08-31',
    useCdn: true,
    token: 'skbFoHRH1f9yDRBL6gVyxwnG8ltIe3H9UETND0CUBPWyLspI4p8RNt0SYjDciNMfNJ5jZjI4cjcSPQYdoBKS67hXXnurKPo2lzRQdVtpUMPAJKHTfuQoRuBwDe5VCtBWiItFqUSjAdBolhnjhOyHkjGRe4fn4YEs8z5qQxLQQoz99GQUz8i1',
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

