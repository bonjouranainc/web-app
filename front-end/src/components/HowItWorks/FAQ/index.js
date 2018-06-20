import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

export default class FAQ extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          ¿Quién es Ana?
          <Icon name="dropdown" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            Ana es la "mastermind" detrás de las operaciones y logísticas. Es
            quien está atenta a cada detalle de tu hogar. Junto a Ana, trabaja
            un personal quienes son empleadas a tiempo completo -tiempo parcial-
            a las cuales cautelosamente se les hace una verificación de
            antecedentes (identidad, criminal y crédito), referencias y se lleva
            a cabo entrevistas personales. Son el tipo de persona que deseas en
            tu hogar: responsables, confiables, amigables e intuitivas. Antes de
            nuestra primera visita, nuestro equipo te presentará a tu Ana a
            través de correo electrónico (o en persona) para que sepas qué los
            hace tan especial.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          ¿Cómo comienzo con los servicios de Bonjour! Ana?
          <Icon name="dropdown" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            Para comenzar, regístrate -Aqui- para saber si estamos disponible en
            tu vecindario. Luego, nos comunicaremos con usted para coordinar una
            cita de bienvenida a la hora más conveniente para usted. Durante
            esta visita haremos un recorrido a su hogar para saber sus
            preferencias, aprender de su rutina, contestar cualquier pregunta y
            si usted lo desea y es necesario, adquirir una copia de sus llaves.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          ¿Cómo me cobrarán?
          <Icon name="dropdown" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            No le cobraremos hasta que comiencen sus servicios. La subscripción
            será cobrada la primera semana del servicio y cada cuatro semanas
            después. En adición, se le estará cargando el costo de los bienes y
            servicios que usted recibió (Ej. compra, laundry, limpieza de hogar,
            sastre) semanalmente. Al final de la semana, se le enviará una
            factura y todos los recibos para que usted conozca exactamente por
            qué se le cobra esa cantidad. Pagos son procesados a través de
            Stripe, un sistema seguro y confiable por compañías mundiales. Se le
            aplicará un "fee" de procesamiento de la cantidad de 3.8% a facturas
            no relacionadas a la subscripciÃ³n. Este "fee" es para cubrir los
            costos misceláneos de procesamiento al agregar y pagar servicios a
            vendedores externos utilizados a través de Ana.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          ¿Bonjour Ana trabaja en mi vecindario?
          <Icon name="dropdown" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            Asegúrate de registrarte para ver si estamos disponibles en tu
            vecindario. Por el momento, estamos limitando los nuevos miembros y
            estaremos enfocándonos en el número de vecindarios más alto de las
            personas registradas. Ayúdate a ti (y a nosotros)... comparte
            información sobre Ana a tus amigos y familiares.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
        >
          ¿Cómo me comunico con mi personal?
          <Icon name="dropdown" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
            Comunicaciones entre el cliente y las directoras de clientes serán a
            través de nuestro equipo de servicio al cliente en las oficina. Eso
            asegura que su solicitud y comentarios sean registradas
            apropiadamente, y así solo ocupar a supersonal a un servicio de
            calidad. Para cualquier consultas y solicitudes especiales, "chatea"
            con nosotros presionando en el chat que aparece abajo en la esquina
            derecha o escríbenos a
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 5}
          index={5}
          onClick={this.handleClick}
        >
          ¿Qué cubre la subscripción?
          <Icon name="dropdown" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <p>
            La subscripción cubre su visita(s) semanal(es), que incluye el
            ordenamiento y la coordinación y manejo de todos sus pedidos. Le
            facturaremos por el costo de los bienes y servicios que usted ordene
            cada semana (Ej. compra de alimentos y hogar, "laundry", limpieza de
            hogar, etc). La cantidad facturada son precios del mercado o hasta
            mejores - no se le añade ningún precio adicional ni "fees" por
            entrega.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 6}
          index={6}
          onClick={this.handleClick}
        >
          ¿Hay un límite en los pedidos?
          <Icon name="dropdown" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
          <p>
            ¡Claro que NO! Le exhortamos a que hagas los pedidos que desee. Al
            pasar el tiempo, notaremos si usted hace un pedido o solicitud
            recurrentemente, de forma que no tendrá que hacerla nuevamente.
            Recuerde, que le facturaremos por el costo de los bienes y servicios
            que ordene cada semana.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 7}
          index={7}
          onClick={this.handleClick}
        >
          ¿Cuál es su política de cancelación?
          <Icon name="dropdown" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 7}>
          <p>
            A usted se le facturará una vez al mes y usted puede colocar su
            cuenta en "hold" en cualquier momento. Sin embargo, nuestro
            servicios está diseñado para conocer sus preferencias, y hábitos y
            solo se mejora con el tiempo... así que es mejor probar el servicio
            por varios meses. Si usted decide poner su cuenta en "hold" o
            cancelar su membresía, solo deberá notificarnos con 10 días
            anticipación a su próxima factura y haremos los arreglos pertinentes
            para no cobrarle.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 8}
          index={8}
          onClick={this.handleClick}
        >
          ¿Cuán frecuente me visitará Ana?
          <Icon name="dropdown" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 8}>
          <p>
            Con el servicio A1, le visitarán una vez a la semana en un día fijo
            establecido (Cada lunes, por ejemplo). Con el servicio A2, le
            visitarán dos veces a la semana en días fijos establecidos (Cada
            lunes y jueves, por ejemplo). Si deseas más visitas, chatea con
            nosotros o escríbenos un correo electrónico a hi@bonjourana. com y
            pregunta por el "Servicio Exclusivo de Ana".
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 9}
          index={9}
          onClick={this.handleClick}
        >
          ¿Puedo solicitar algún servicio de mi comercio preferido?
          <Icon name="dropdown" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 9}>
          <p>
            Por supuesto que sí. Sin embargo, esto puede resultar en un pequeño
            "fee". Estamos muy seguros que le encantarán los comercios con los
            cuales trabajamos. Cada vendedor es evaluado personalmente para
            asegurar su calidad.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 10}
          index={10}
          onClick={this.handleClick}
        >
          ¿Cómo eligen a sus vendedores?
          <Icon name="dropdown" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 10}>
          <p>
            Comercios: Supermercados, sastres, laundries, ect. Trabajamos con
            los mejores comercios que ofrecen competitivos precios y calidad de
            servicio. Hacemos lo mejor para darte la mejor opción pero también
            aspiramos a trabajar con las pequeñas y medianas empresas (PyMES)
            del País sin comprometer el servicio ni la calidad.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 11}
          index={11}
          onClick={this.handleClick}
        >
          ¿Cuáles son sus precios?
          <Icon name="dropdown" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 11}>
          <p>
            No le añadimos precios y cobramos los precios que están en el
            mercado y/o lo que los comercios/ partners cobran. Todos los precios
            están basados en estimados de comercios corrientes. Sin embargo,
            precios pueden variar por vecindario y/o pueblo.
          </p>
        </Accordion.Content>
      </Accordion>
    );
  }
}
