import getPages from './get-pages'

describe.only('getPages func', () => {
  it('should return an object', () => {
    expect(getPages()).toBeInstanceOf(Object)
  })

  it('should start from 1 if totalPages < maxPages', () => {
    let start = getPages({totalPages: 3}).startPage
    expect(start).toEqual(1)
    start = getPages({totalPages: 5}).startPage
    expect(start).toEqual(1)
    start = getPages({totalPages: 10, maxPages: 20}).startPage
    expect(start).toEqual(1)
    start = getPages({totalPages: 11}).startPage
    expect(start).not.toEqual(1)
  })

  it('should end with totalPages if totalPages < maxPages', () => {
    let end = getPages({totalPages: 3}).endPage
    expect(end).toEqual(3)
    end = getPages({totalPages: 5}).endPage
    expect(end).toEqual(5)
    end = getPages({totalPages: 10, maxPages: 20}).endPage
    expect(end).toEqual(10)
    end = getPages({totalPages: 11}).endPage
    expect(end).not.toEqual(11)
  })

  it('should return right start and end page when current page somewhere in the middle', () => {
    let {startPage, endPage} = getPages({currentPage: 20, totalPages: 100})
    expect(startPage).toEqual(17)
    expect(endPage).toEqual(23)

    ;({startPage, endPage} = getPages({currentPage: 11, totalPages: 100}))
    expect(startPage).toEqual(8)
    expect(endPage).toEqual(14)

    ;({startPage, endPage} = getPages({currentPage: 50, totalPages: 100}))
    expect(startPage).toEqual(47)
    expect(endPage).toEqual(53)

    ;({startPage, endPage} = getPages({currentPage: 75, totalPages: 100}))
    expect(startPage).toEqual(72)
    expect(endPage).toEqual(78)
  })

  it('should return right start and end page when current page near to the end', () => {
    let {startPage, endPage} = getPages({currentPage: 98, totalPages: 100})
    expect(startPage).toEqual(94)
    expect(endPage).toEqual(100)

    ;({startPage, endPage} = getPages({currentPage: 41, totalPages: 44}))
    expect(startPage).toEqual(38)
    expect(endPage).toEqual(44)

    ;({startPage, endPage} = getPages({currentPage: 18, totalPages: 20, maxPages: 10}))
    expect(startPage).toEqual(11)
    expect(endPage).toEqual(20)
  })

  it('should return right start and end page when current page near to the start', () => {
    let {startPage, endPage} = getPages({currentPage: 3, totalPages: 100})
    expect(startPage).toEqual(1)
    expect(endPage).toEqual(7)

    ;({startPage, endPage} = getPages({currentPage: 2, totalPages: 44, maxPages: 20}))
    expect(startPage).toEqual(1)
    expect(endPage).toEqual(20)

    ;({startPage, endPage} = getPages({currentPage: 3, totalPages: 20, maxPages: 15}))
    expect(startPage).toEqual(1)
    expect(endPage).toEqual(15)
  })
})
