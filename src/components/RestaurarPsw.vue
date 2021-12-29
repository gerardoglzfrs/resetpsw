<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="9" lg="4" md="4">
                <b-col class="text-center">
                    <img contain id="logo" src="../assets/img/Healtech.png" />
                    <h4>Cambiar contraseña</h4>
                </b-col>
                <b-form>
                    <b-row class="content">
                        <b-col cols="12">
                            <label class="blue"><strong>Contraseña</strong></label>
                            <b-form-input v-model="user.psw1" type="password" class="form_input mt-1"></b-form-input>
                        </b-col>
                        <b-col cols="12">
                            <label class="blue"><strong>Confirmar contraseña</strong></label>
                            <b-form-input v-model="user.psw2" type="password" class="form_input mt-1"></b-form-input>
                        </b-col>
                        <b-col cols="12" class="text-center">
                            <b-button class="mt-2 btn btn-success">CONFIRMAR</b-button>
                        </b-col>
                    </b-row>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'RestaurarPsw',
    data: () => ({
        user: {
            psw1: '',
            psw2: ''
        }
    })
}
</script>

<style scoped>
    img {
        height: 80px;
        width: auto;
    }

    .btn {
       width: auto;
       height: auto;
    }

    .content {
        background-color: rgb(196, 242, 242);
        padding: 20px;
        border-radius: 20px;
    }
</style>