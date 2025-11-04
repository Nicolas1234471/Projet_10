import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await fetch(
                'http://localhost:3001/api/v1/user/login',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                const errorMessage = data?.message;
                return thunkAPI.rejectWithValue(errorMessage);
            }

            sessionStorage.setItem('token', data.body.token);
            thunkAPI.dispatch(getUserProfile());

            return {
                user: data.body,
                token: data.body.token,
            };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getUserProfile = createAsyncThunk(
    'auth/getUserProfile',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token || sessionStorage.getItem('token');

        try {
            const response = await fetch(
                'http://localhost:3001/api/v1/user/profile',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Erreur lors de la récupération du profil');
            }

            const data = await response.json();
            return data.body;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const editUsername = createAsyncThunk(
    'auth/editUsername',
    async ({ userName }, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token || sessionStorage.getItem('token');

        try {
            const response = await fetch(
                'http://localhost:3001/api/v1/user/profile',
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ userName }), // ici on envoie juste username
                }
            );

            if (!response.ok) {
                throw new Error('Erreur lors de la mise à jour du username');
            }

            const data = await response.json();
            return data.body;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.error = null;
            sessionStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(getUserProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUserProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(getUserProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(editUsername.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editUsername.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })
            .addCase(editUsername.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                if (state.user) {
                    state.user.userName = action.payload.userName;
                }
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
