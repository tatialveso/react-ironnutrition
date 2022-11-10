import { Button, Form } from "react-bootstrap"

function AddFood() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome do meu prato</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Imagem do prato</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Calorias</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Servings</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Cadastrar
            </Button>
        </Form>
    )
}

export default AddFood