import useCopyToClipboard from "./useCopyToClipboard";

function UseCopyToClipboardComponent() {
    const { isCopied, copy } = useCopyToClipboard();

    return (
        <div>
            <h4>
                Welcome to our YouTube channel where we discuss frontend topics in ReactJS and JavaScript. Stay tuned for more tutorials and tips!
            </h4>
            <button onClick={copy}>
                {isCopied ? "Copied!" : "Copy Text"}
            </button>
        </div>
    );
}

export default UseCopyToClipboardComponent;
