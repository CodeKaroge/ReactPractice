import { useEffect } from "react";

export default function useDocumentHead(options = {}) {
    const {
        title,
        description,
        canonical,
        ogTitle,
        ogDescription,
        ogImage,
        twitterCard,
        twitterTitle,
        twitterDescription,
        twitterImage,
    } = options;

    useEffect(() => {
        if (title) document.title = title;
        if (description) {
            let meta = document.querySelector("meta[name='description']");
            if (meta) meta.setAttribute("content", description);
            else {
                meta = document.createElement("meta");
                meta.name = "description";
                meta.content = description;
                document.head.appendChild(meta);
            }
        }
        if (canonical) {
            let link = document.querySelector("link[rel='canonical']");
            if (link) link.setAttribute("href", canonical);
            else {
                link = document.createElement("link");
                link.rel = "canonical";
                link.href = canonical;
                document.head.appendChild(link);
            }
        }
        if (ogTitle) setMetaProperty("og:title", ogTitle);
        if (ogDescription) setMetaProperty("og:description", ogDescription);
        if (ogImage) setMetaProperty("og:image", ogImage);
        if (twitterCard) setMetaName("twitter:card", twitterCard);
        if (twitterTitle) setMetaName("twitter:title", twitterTitle);
        if (twitterDescription) setMetaName("twitter:description", twitterDescription);
        if (twitterImage) setMetaName("twitter:image", twitterImage);
        function setMetaProperty(property, content) {
            let meta = document.querySelector(`meta[property='${property}']`);
            if (meta) meta.setAttribute("content", content);
            else {
                meta = document.createElement("meta");
                meta.setAttribute("property", property);
                meta.setAttribute("content", content);
                document.head.appendChild(meta);
            }
        }
        function setMetaName(name, content) {
            let meta = document.querySelector(`meta[name='${name}']`);
            if (meta) meta.setAttribute("content", content);
            else {
                meta = document.createElement("meta");
                meta.setAttribute("name", name);
                meta.setAttribute("content", content);
                document.head.appendChild(meta);
            }
        }
    }, [
        title,
        description,
        canonical,
        ogTitle,
        ogDescription,
        ogImage,
        twitterCard,
        twitterTitle,
        twitterDescription,
        twitterImage,
    ]);
}
