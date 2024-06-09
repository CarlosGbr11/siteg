import {useState} from 'react' 

function ComprarTenis1() {

    const [formValores, setFormValores] = useState({
      texto: '',
      ativo_feedback: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValores(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        console.log("Dados a serem enviados: ", formValores);
        const response = await fetch('http://localhost:3000/feeds', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(formValores)
        });
  
        const json = await response.json();
        console.log(response)
        console.log(json);
  
      } catch (err) {
        console.error("Erro ao enviar", err)
      }
    };
  
    return (
  
      <form onSubmit={handleSubmit}>
  
        <div className='container-create'>
          <div className='formulario'>
            <label>
              texto
              <input type="text" name="texto" value={formValores.texto} onChange={handleChange} />
            </label>
            <button type='submit'> CADASTRAR </button>
  
          </div>
        </div>
      </form>
    )
  
  }
  export default ComprarTenis1;
