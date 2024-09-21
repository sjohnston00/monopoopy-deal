const cards = [
  {
    type: 'money',
    value: 1
  },
  {
    type: 'money',
    value: 2
  },
  {
    type: 'property',
    value: 2,
    color: 'brown',
    name: 'Old Kent Road'
  },
  {
    type: 'property',
    value: 2,
    color: 'brown',
    name: 'Whitechapel Road'
  },
  {
    type: 'property',
    value: 4,
    color: '#2C66AD',
    name: 'Park Lane'
  },
  {
    type: 'property',
    value: 4,
    color: '#2C66AD',
    name: 'Mayfair'
  },
  {
    type: 'property',
    value: 4,
    color: '#D02F26',
    name: 'Trafalgar Square'
  }
]

cards
  .filter((card) => card.type === 'property')
  .map((card) => {
    const list = document.getElementById('property-card-list')
    const propertyCard = createProperyCard(card)

    list.appendChild(propertyCard)
  })

function createProperyCard(card) {
  const propertyCard = document.createElement('div')
  propertyCard.classList.add('property-card')

  const propertyCardHeader = document.createElement('div')
  propertyCardHeader.classList.add('property-card-header')
  propertyCardHeader.style.backgroundColor = card.color

  const propertyCardHeaderTitle = document.createElement('span')
  propertyCardHeaderTitle.textContent = card.name
  propertyCardHeaderTitle.classList.add('property-card-header-title')
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

  propertyCard.appendChild(propertyCardHeader)
  propertyCard.appendChild(propertyCardBody)

  return propertyCard
}
