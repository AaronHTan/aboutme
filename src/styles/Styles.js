const Container = { display: "flex", flexDirection: "column" };
const Header = { padding: "0vh 10vw", textAlign: "center", color: "Black" };
const LabelContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
const Label = { padding: "1vh 1vw", textAlign: "center" };
const Paragraph = {
    margin: "auto",
    textAlign: "left",
    width: "500px",
    padding: "10px"
}

const FormContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
const ErrorMessage = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

export const styles = {
    Container: Container,
    Header: Header,
    Paragraph: Paragraph,
    LabelContainer: LabelContainer,
    Label: Label,
    ErrorMessage: ErrorMessage,
    FormContainer: FormContainer,
}