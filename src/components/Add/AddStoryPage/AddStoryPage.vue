<template class="main1">
  <v-card class="card">
    <v-container><v-col cols="14" md="10"> <label class="text">Story title</label>
        <v-text-field outlined height="20 !important" class="textfield">
        </v-text-field>
      </v-col>

      <div class="status" style="position:absolute">
        <label class="text">Status</label>
        <v-select 
        height="33"
        outlined
        :items="items"
        :menu-props="{ bottom: true, offsetY: true }"
        >
          
        </v-select>
      </div>

      <v-col cols="12" style="margin-top:-25px">
        <label class="text">Details</label>
        <v-divider></v-divider>
      </v-col>

      <v-col cols="12" xs="100" style="margin-top:-26px">
        <label class="text">As a</label>
        <v-text-field placeholder="user" outlined dense class="text-box-style" tabindex="4">
        </v-text-field></v-col>

      <v-col cols="12" style="margin-top:-33px">
        <label class="text">I want</label>
        <v-text-field placeholder="feature" outlined dense class="text-box-style" tabindex="4">
        </v-text-field> </v-col>

      <v-col cols="12" style="margin-top:-35px">
        <label class="text">So that</label>
        <v-text-field placeholder="reason" outlined dense maxlength="12" class="text-box-style" tabindex="4">
        </v-text-field>
      </v-col>

      <v-col cols="12" style="margin-top:-33px">
        <label class="text">Description</label>
        <v-textarea placeholder="feature" outlined dense maxlength="12" class="text-box-style" tabindex="4">
        </v-textarea>
      </v-col>

      <v-col cols="12" md="3" style="margin-top:-38px">
        <label class="text">Assigned to</label>
        <v-autocomplete placeholder="srimanikandan" outlined dense class="text-box-style" tabindex="4">
        </v-autocomplete>
      </v-col>

      <v-col cols="12" md="3" style="margin-top:-38px">
        <label class="text">Epic</label>
        <v-autocomplete placeholder="BDD editor epic" outlined dense class="text-box-style" tabindex="4">
        </v-autocomplete>
      </v-col>

      <v-col cols="12" md="3" style="margin-top:-38px">
        <label class="text">Story points</label>
        <v-text-field dense outlined type="number" :rules="[numberRule]">
        </v-text-field>
      </v-col>

      <v-col cols="12" style="margin-top:-38px">
        <label class="text">Tags</label>
        <v-combobox outlined dense v-model="select" chips multiple deletable-chips small-chips disable-dropdown>
        </v-combobox>
      </v-col>

      <v-col cols="12" style="margin-top:-38px"><label class="text">Tasks</label>
        <v-divider></v-divider>
      </v-col>

      <v-col id="app" cols="12" style="margin-top:-27px">
        <label class="text">Type your tasks here<br></label>
        <b-form-tags v-model="value" style="display:contents">
          <template v-slot="{ tags, inputAttrs, inputHandlers, tagVariant, removeTag }">

            <b-input-group class="mb-2">
              <b-form-input v-bind="inputAttrs" v-on="inputHandlers" class="form-control"></b-form-input>
            </b-input-group>

            <div class="d-inline-block tasks-area "
              style="font-size: 20px; display: flex !important; flex-direction: column;">

              <b-form-tag style="color:black;border:1px solid black;margin: 3px;background-color: #F7F6FB;"
                v-for="tag in tags" @remove="removeTag(tag)" :key="tag" :title="tag"
                :variant="tagVariant" class="mr-1" list>
                  <div style="display: flex;height:35px;">
                    <v-checkbox style="padding-left: 10px;margin-top:3px;"></v-checkbox>
                    <span>{{ tag }}<br></span>
                  </div>
              </b-form-tag>
            </div>
          </template>
        </b-form-tags>

      </v-col>
      <v-col cols="12" style="margin-top:-12px">
        <label class="text"> BDD Scenarios</label>
        
        <v-divider></v-divider>

        <div id="app" v-if="!isHidden">
          <button class="button btn-primary" style="margin-left:93%;margin-top:-41px;position:absolute" @click="addRow"><v-icon>fa
            fa-plus</v-icon></button>
          <table class="table" >
            <tbody>
              <tr v-for="(row) in rows" v-bind:key="row">
                <td>
                  <v-card outlined v-model="row.sub" style="position:absolute;width:94%">
                    <v-btn style="padding:0px;min-width:0px"
                      href="/#/HomePage/StoryPageOne"><v-icon>mdi-note-edit</v-icon></v-btn>
                    Scenario
                    <br><v-chip style="left:20px" class="ma-2">Tag Name</v-chip>
                  </v-card>
                </td>
                <br><br><br><br>
              </tr>
            </tbody>
          </table>
        </div>

        <label style="font-size:13px" v-if="isHidden">You have no BDD Behaviour Scenarios defined - how are you going to test your
          story?<a name="link" v-on:click="isHidden = false" style="color:blue">Click here to add scenario</a></label>

        <div>
          <v-btn depressed style="border-radius:9px;height:35px;background-color:#2B5AD9;color:white">
            <v-icon>fa-save</v-icon>&nbsp; Save
          </v-btn>
          &nbsp;
          <v-btn depressed outlined style="border-radius:9px;height:35px;color:#2B5AD9;background-color:white">
            <v-icon>fa fa-download</v-icon>&nbsp;
            Download Feature File
          </v-btn>
        </div>
      </v-col>
    </v-container>
  </v-card>
</template>


<script>
import "@/assets/Style.css"

export default {
  data: () => ({
    isHidden: true,
    Headers: [
      { text: "Tags", value: "Tags" },
      { text: "Status", value: "Status" },
    ],
    myIcon: {
      name: 'mdi-unfold-less-vertical',
      color: 'default'
    },
    colors: {
      green: 'green',
      grey: 'grey',
      red: 'red'
    },
    desserts: [
      {
        name: "Story 1",
        Status: "To Do",
        Points: 6,
        Assigned: "Srimanikandan",
        Tags: "Tags",
      },
      {
        name: "Story 2",
        Status: "Process",
        Points: 9,
        Assigned: "Manoj Gunupudi",
        Tags: "Tags",
      }
    ],
    items: [
      { text: "To Do"},
      { text: "Process" },
      { text: "Completed"}
    ],
    rows: []
  }),
  methods: {
    addRow: function () {
      this.rows.push({ sub: "" });
    },
    changeSupplierStatusToUp() {
      this.myIcon.name = 'mdi-chevron-up';
      this.myIcon.color = this.colors.green;
    },
    changeSupplierStatusToDown() {
      this.myIcon.name = 'mdi-chevron-down';
      this.myIcon.color = this.colors.red;
    },
    changeSupplierStatusToMid() {
      this.myIcon.name = 'mdi-unfold-less-vertical';
      this.myIcon.color = this.colors.grey;
    }
  },
}
</script> 



<style scoped>
.tasks-area span span {
  display: flex !important;
  align-items: center !important;
}

.card {
  position: relative;
  top: 70px;
  margin-left: 16%;
  z-index: 1;
}

table,
tr,
td,
th {
  border-style: none;
  padding: 10px;
  width: 50%;
}

.theme--light.v-divider {
  border-color: rgba(0, 0, 0, 3.12);
  margin-top: 4px;
}

.status {
  margin-left: 81%;
  margin-top: -107px;
  width:16%;
}

.v-text-field {
  margin-top: 8px;
}

.mr-1>span {
  display: contents;
}

</style>