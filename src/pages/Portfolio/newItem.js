import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
function newItem() {
  return (
    <div className=".center-col-p">
      
        <h4>Add new text</h4>
        <br />
        <Form
          className="form"
          style={{ alignItems: "center", position: "relative" }}
        >
          <Col md="4">
            <FormGroup>
              <Label>Title</Label>
              <Input type="text" name="title" id="title" />
            </FormGroup>
            <FormGroup>
              <Label>Image Url</Label>
              <Input type="text" name="imageUrl" id="imageUrl" />
            </FormGroup>
            <FormGroup>
              <Label>Text</Label>
              <Input type="text" name="text" id="text" />
            </FormGroup>
            <Button
              style={{
                alignItems: "center",
                marginLeft: 20,
                position: "relative",
                width: 300,
                backgroundColor: " #D61471",
                border: "none",
              }}
            >
              Kaydet
            </Button>
          </Col>
        </Form>
    </div>
  );
}
export default newItem;
