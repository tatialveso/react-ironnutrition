import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import foodsData from '../../foods.json'
import FoodBox from '../FoodBox/FoodBox'
import AddFood from '../AddFood/AddFood'

// componente responsável por renderizar a lista e da maioria das operações do CRUD
function FoodList() {
    const [foods, setFoods] = useState(foodsData)

    // por props estamos passando a informação
        //de cada item do array foodsData
    const foodMap = foods.map((food, index) => {
        return <Col key={ index }><FoodBox food={ food } /></Col>
    })

    return (
        <Container>
            <Row>
                <AddFood foods={ foods } setFoods={ setFoods } />
            </Row>
            <Row>
                { foodMap }
            </Row>
        </Container>
    )
}

export default FoodList