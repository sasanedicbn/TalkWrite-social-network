type Account = {
    username: string;
    email: string;
    full_name: string;
  };
  
  type UserApiResponse = Account | { status: 'error'; message: string };
  
  export const UserApi = async (): Promise<UserApiResponse> => {
    const baseUrl = 'https://api.hr.constel.co/api/v1';
    const jwt = localStorage.getItem('jwt');
  
    if (!jwt) {
      return { status: 'error', message: 'JWT token not found' };
    }
  
    try {
      const response = await fetch(`${baseUrl}/accounts/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      const { account } = data;
      return account;
    } catch (error) {
      console.error('Login error:', error);
      if (error instanceof Error) {
        return { status: 'error', message: error.message };
      } else {
        return { status: 'error', message: 'An unknown error occurred' };
      }
    }
  };
  