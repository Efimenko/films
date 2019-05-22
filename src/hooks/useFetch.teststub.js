import useFetch from './useFetch'
import {renderHook} from 'react-hooks-testing-library'
import {act} from 'react-test-renderer'

describe("useFetch", () => {
  it('fetches data from server when server returns a successful response', async (done) => {
    jest.useFakeTimers()
    const linkForFetch = 'https://somedomain.com/api'
    const mockResponse = {}
    const mockJson = Promise.resolve(() => mockResponse)
    const mockFetch = Promise.resolve({
      status: 200,
      json: () => mockJson
    })

    jest.spyOn(window, 'fetch').mockImplementation(() => mockFetch)
    const {result, waitForNextUpdate} = renderHook(() => useFetch(''))

    act(() => {
      result.current.doFetch(linkForFetch)
    })

    await waitForNextUpdate();
    expect(window.fetch).toHaveBeenCalledTimes(1)
    expect(window.fetch).toHaveBeenCalledWith(linkForFetch)

    window.fetch.mockClear()
    done()
  })
})