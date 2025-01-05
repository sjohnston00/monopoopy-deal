import { PROPERTY_CARDS } from './cards.js'
import { COLOURS } from './colours.js'

const cards = [
  {
    type: 'money',
    value: 1
  },
  {
    type: 'money',
    value: 2
  }
]

PROPERTY_CARDS.filter((card) => card.type === 'property').map((card) => {
  const list = document.getElementById('property-card-list')
  const propertyCard = createProperyCard(card)

  list.appendChild(propertyCard)
})

function createProperyCard(card) {
  const propertyCard = document.createElement('div')
  propertyCard.classList.add('property-card')

  const cardBgColour = card.color
  const cardColour =
    card.color === COLOURS.YELLOW || card.color === COLOURS.SKY_BLUE
      ? 'black'
      : 'white'

  const propertyCardHeader = document.createElement('div')
  propertyCardHeader.classList.add('property-card-header')
  propertyCardHeader.style.backgroundColor = cardBgColour

  const propertyCardHeaderTitle = document.createElement('span')
  propertyCardHeaderTitle.textContent = card.name
  propertyCardHeaderTitle.classList.add('property-card-header-title')
  propertyCardHeaderTitle.style.color = cardColour
  propertyCardHeader.appendChild(propertyCardHeaderTitle)

  const propertyCardHeaderValueWrapper = document.createElement('div')
  propertyCardHeaderValueWrapper.classList.add(
    'property-card-header-value-wrapper'
  )

  const propertCardHeaderValueSign = document.createElement('span')
  propertCardHeaderValueSign.classList.add('property-card-header-value-sign')
  propertCardHeaderValueSign.textContent = 'm'
  propertyCardHeaderValueWrapper.appendChild(propertCardHeaderValueSign)

  const propertyCardHeaderValue = document.createElement('span')
  propertyCardHeaderValue.classList.add('property-card-header-value')
  propertyCardHeaderValue.textContent = card.value
  propertyCardHeaderValueWrapper.appendChild(propertyCardHeaderValue)
  propertyCardHeader.appendChild(propertyCardHeaderValueWrapper)

  const propertyCardBody = document.createElement('div')
  propertyCardBody.classList.add('property-card-body')

  const propertyCardInfoTextRow = document.createElement('div')
  propertyCardInfoTextRow.classList.add('property-card-body-info-text-row')
  propertyCardInfoTextRow.innerHTML =
    '<span>Properties<br />Owned</span><span>Rent</span>'

  propertyCardBody.appendChild(propertyCardInfoTextRow)

  if (card.rent) {
    for (let index = 0; index < card.rent.length; index++) {
      const rentValue = card.rent[index]
      const propertyCardInfoRow = document.createElement('div')

      propertyCardInfoRow.classList.add('property-card-body-info-row')
      propertyCardInfoRow.innerHTML = `<div class="property-card-body-info-row-card">
              <div class="property-card-body-info-row-card-header" style="background-color: ${cardBgColour}"></div>
              <div class="property-card-body-info-row-card-body" style="color: ${
                card.color === COLOURS.YELLOW || card.color === COLOURS.SKY_BLUE
                  ? 'black'
                  : cardBgColour
              };">
                <span>${index + 1}</span>
              </div>
            </div>
            <div class="property-card-body-info-row-rent">
              <div class="property-card-body-info-row-rent-wrapper">
                <span class="property-card-body-info-row-rent-value-sign"
                  >m</span
                >
                <span class="property-card-body-info-row-rent-value">${rentValue}</span>
              </div>
            </div>`
      propertyCardBody.appendChild(propertyCardInfoRow)
    }
  }

  const propertyCardInfoFooterRow = document.createElement('div')
  propertyCardInfoFooterRow.classList.add('property-card-body-info-text-row')
  propertyCardInfoFooterRow.innerHTML =
    '<span>Complete<br />Set</span><span></span>'

  propertyCardBody.appendChild(propertyCardInfoFooterRow)

  propertyCard.appendChild(propertyCardHeader)
  propertyCard.appendChild(propertyCardBody)

  return propertyCard
}
