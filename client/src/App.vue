<script setup lang="ts">
import { ref } from "vue"
import { Card, Button, Select, Input } from "./components/UI/"
import { MessageInterface, SelectInterface } from "../../shared/types/"
import axios from "axios";
const bugTypes = ref<Array<SelectInterface>>([
  { name: "Nuestro", id: 1 },
  { name: "Ajeno", id: 2 }
])
const bugDifficulties = ref<Array<SelectInterface>>([
  { name: "Alta", id: 1 },
  { name: "Intermedia", id: 2 },
  { name: "Baja", id: 3 }
])
const bugTypeTime = ref<Array<SelectInterface>>([
  { name: "Dias", id: 1 },
  { name: "Horas", id: 2 },
])
const form = ref<Bug>({
  bugTypeTeamSelectValue: "",
  bugTypeNumberSelectValue: 0,
  bugTypeDescriptionSelectValue: "",
  bugTypeSelectValue: "Ajeno",
  bugDifficultiesSelectValue: "Alta",
  bugDifficultiesTimeSelectValue: 0,
  bugDifficultiesTypeTimeSelectValue: "Dias",
  bugSprintSelectValue: 0
})
const message = ref<MessageInterface>({
  show: false,
  status: "",
  message: ""
})
const sendData = () => {
  axios.post('http://localhost:8000/bugs/saveBug', { form: form.value }).then(res => {
    message.value.show = true
    message.value.message = res.data.message
    message.value.status = "success"
  }).catch(e => {
    console.log(e)
    message.value.show = true
    message.value.message = e.data.message
    message.value.status = "error"
  })
}
</script>

<template>
  <div class="row">
    <div class="col col-12 toast mb-4" :class="message.status" v-if="message.show">
      {{ message.message }}
    </div>
    <div class="col col-12">
      <Card>
        <template v-slot:body>
          <div class="row">
            <div class="col col-12">
              <label>Sprint actual:</label>
              <Input type="number" v-model="form.bugSprintSelectValue" placeholder="Cual es tu sprint actual" />
            </div>
          </div>
          <div class="row">
            <div class="col col-12">
              <label class="mb-2">Nombre de la incidencia:</label>
              <div class="row">
                <div class="col col-2">
                  <Input type="text" placeholder="IBO" v-model="form.bugTypeTeamSelectValue" />
                </div>
                <div class="col col-2">
                  <Input type="number" placeholder="Number" v-model="form.bugTypeNumberSelectValue" />
                </div>
                <div class="col col-8">
                  <Input placeholder="Nombre de la historia" v-model="form.bugTypeDescriptionSelectValue" />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col col-12 mt-4">
              <label class="mb-2">De quien es el bug:</label>
              <Select :options="bugTypes" v-model="form.bugTypeSelectValue" />
            </div>
          </div>
          <div class="row">
            <div class="col col-12 mt-4">
              <label class="mb-2">Dificultad del bug:</label>
              <div class="row">
                <div class="col col-8">
                  <Select :options="bugDifficulties" v-model="form.bugDifficultiesSelectValue" />
                </div>
                <div class="col col-2">
                  <Input type="number" placeholder="time" v-model="form.bugDifficultiesTimeSelectValue" />
                </div>
                <div class="col col-2">
                  <Select type="number" placeholder="time" :options="bugTypeTime"
                    v-model="form.bugDifficultiesTypeTimeSelectValue" />
                </div>
              </div>
            </div>
          </div>
        </template>

        <template v-slot:footer>
          <Button @click-event="sendData" />
        </template>
      </Card>
    </div>

  </div>
</template>