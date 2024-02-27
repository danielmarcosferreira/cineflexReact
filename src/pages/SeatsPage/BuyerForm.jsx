import styled from "styled-components"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { URL } from "../../constants/url";

export default function BuyerForm({ setName, setCpf, selectedSeats }) {
    const [form, setForm] = useState({ name: "", cpf: "" })
    const navigate = useNavigate()

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
        setName(form.name)
        setCpf(form.cpf)
    }

    function buyTickets(e) {
        e.preventDefault()
        const body = {
            ids: selectedSeats.map(s => s.id),
            name: form.name,
            cpf: form.cpf
        }
        navigate("/success")

        axios.post(`${URL}/seats/book-many`, body)
            .then(res => {
                console.log(res.data);
                if (body.name.length > 1 || body.cpf.length > 1) {
                    navigate("/success")
                } else {
                    return console.log("Quantidade de caracteres em NOME/CPF inválida! ")
                }
                
            })
            .catch(err => console.log(err.response.data));
    }

    return (
        <Form onSubmit={buyTickets}>
                <p>Nome do comprador:</p>
                <input 
                name="name"
                placeholder="Digite seu nome ..." 
                value={form.name} 
                onChange={handleForm} 
                type="text" />

                <p>CPF do comprador:</p>
                <input 
                name="cpf"
                placeholder="Digite seu CPF ..." 
                value={form.cpf} 
                onChange={handleForm} 
                type="number" />

                <ButtonReserve onClick={buyTickets}>Reservar assento(s)</ButtonReserve>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 25px 10px 0 10px;

    p {
        font-size: 18px;
        margin: 5px;
        display: flex;
        justify-content: flex-start;
    }

    input {
        width: 350px;
        height: 35px;
        margin: 7px 0;
        border: 1px solid #D4D4D4;
        &::placeholder {
        color: #AFAFAF;
        font-size: 18px;
        padding-left: 10px;
        }
    }
`

const ButtonReserve = styled.button`
    background-color: #E8833A;
    color: white;
    font-size: 17px;
    font-weight: 400;
    width: 225px;
    height: 40px;
    margin-top: 30px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`




// import styled from "styled-components"
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function BuyerForm({ setName, setCpf, selectedSeats }) {
//     const [form, setForm] = useState({ name: "", cpf: "" })

//     function handleForm(e) {
//         const { name, value } = e.target
//         setForm({ ...form, [name]: value })
//     }

//     function buyTickets(e) {
//         e.preventDefault()
//         const body = {
//             ids: selectedSeats.map(s => s.id),
//             name: name,
//             cpf: cpf
//         }
//         console.log(body);
//     }

//     console.log(name);

//     return (
//         <Form>
//             <InputsStyle>
//                 <p>Nome do comprador:</p>
//                 <input placeholder="Digite seu nome ..." value={form.name} onChange={handleForm} type="text" />
//             </InputsStyle>
//             <InputsStyle>
//                 <p>CPF do comprador:</p>
//                 <input placeholder="Digite seu CPF ..." value={form.cpf} onChange={handleForm} type="number" />
//             </InputsStyle>
//             <Link to={"/success"}>
//                 <ButtonReserve onClick={buyTickets}>Reservar assento(s)</ButtonReserve>
//             </Link>
//         </Form>
//     )
// }

// const Form = styled.form`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// `

// const InputsStyle = styled.div`
//     width: 350px;
//     margin: 25px 10px 0 10px;
//     display: flex;
//     flex-direction: column;
    
//     p {
//         font-size: 18px;
//     }

//     input {
//         height: 35px;
//         margin-top: 3px;
//         border: 1px solid #D4D4D4;
//         &::placeholder {
//             color: #AFAFAF;
//             font-size: 18px;
//             padding-left: 10px;
//         }
//     }
// `

// const ButtonReserve = styled.button`
//     background-color: #E8833A;
//     color: white;
//     font-size: 17px;
//     font-weight: 400;
//     width: 225px;
//     height: 40px;
//     margin-top: 30px;
//     border-radius: 5px;
//     border: none;
//     cursor: pointer;
// `
