// They don't necessarily need to take props
// This one also has an explicit return
const App = () => {
    const cardRef = React.createRef();

    const cards = [{
            img: "https://picsum.photos/id/2/328/209",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },

        {
            img: "https://picsum.photos/id/202/328/209",
            title: "It is a long established fact that a reader will be distracted by the readable content."
        },

        {
            img: "https://picsum.photos/id/204/328/209",
            title: "There are many variations of passages of Lorem Ipsum available, but the majority "
        },

        {
            img: "https://picsum.photos/id/209/328/209",
            title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        },

        {
            img: "https://picsum.photos/id/206/328/209",
            title: "um."
        },

        {
            img: "https://picsum.photos/id/215/328/209",
            title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        },

        {
            img: "https://picsum.photos/id/236/328/209",
            title: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum."
        },

        {
            img: "https://picsum.photos/id/287/328/209",
            title: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum."
        },

        {
            img: "https://picsum.photos/id/247/328/209",
            title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        },

        {
            img: "https://picsum.photos/id/257/328/209",
            title: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum."
        }
    ];



    const scrollElement = offset => {
        cardRef.current.scrollLeft += offset;
    };

    return /*#__PURE__*/ (
        React.createElement(PageContainer, null, /*#__PURE__*/
            React.createElement("h3", null, "Horizontal Card Carousel"), /*#__PURE__*/
            React.createElement(ButtonContainer, null, /*#__PURE__*/
                React.createElement(ActionButton, {
                        onClick: () => {
                            scrollElement(-cardRef.current.clientWidth);
                        }
                    },

                    " ",
                    `<`), /*#__PURE__*/

                React.createElement(ActionButton, {
                        onClick: () => {
                            scrollElement(cardRef.current.clientWidth - 205);
                        }
                    },

                    " ",
                    `>`)), /*#__PURE__*/


            React.createElement(CardsContainer, { ref: cardRef },
                cards.map((item, idx) => /*#__PURE__*/
                    React.createElement(StyledCard, { key: idx },
                        " ", /*#__PURE__*/
                        React.createElement(ImageContainer, { src: item.img }), /*#__PURE__*/
                        React.createElement(Content, null, item.title, " "))))));





};

const PageContainer = styled.div `
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
    align-items: center;
    justify-content: center;
  `;

const ActionButton = styled.button `
    display: inline-block;
    margin-right: 6px;
    background: #ffffff;
  
    border: 1px solid #d7dfe2;
    box-sizing: border-box;
    padding: 10px;
    font-size: 18px;
  
    box-shadow: 0px 2px 4px rgba(55, 99, 122, 0.2);
    border-radius: 5px;
  `;

const ButtonContainer = styled.div `
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-bottom: 24px;
  `;

const CardsContainer = styled.div `
    display: flex;
    max-width: 100vw;
    overflow: scroll;
    scroll-behavior: smooth;
  
    &::-webkit-scrollbar {
      -webkit-appearance: none;
    }
  `;

const StyledCard = styled.div `
    box-shadow: 0px 2px 4px rgba(55, 99, 122, 0.2);
    height: 405px;
    width: 328px;
    background: #fff;
    margin-right: 10px;
    border-radius: 4px;
  `;

const ImageContainer = styled.img `
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  `;

const Content = styled.div `
    font-size: 23px;
    padding-top: 12px;
    padding-left: 10px;
    padding-right: 10px;
  `;

ReactDOM.render( /*#__PURE__*/ React.createElement(App, null), document.getElementById("root"));