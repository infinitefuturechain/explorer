// eslint-disable-next-line import/prefer-default-export
export const NetInfo = {
  get api() {
    // if (process.env.NODE_ENV === 'production') {
    // }

    // return `${location.origin}/api`;
    return `https://rest.infinitefuture.top/if/api`
  },
  get node() {
    // if (process.env.NODE_ENV === 'production') {
    // }

    // return `${location.origin}/node`;
    return `https://rest.infinitefuture.top/if/node`
  },
};