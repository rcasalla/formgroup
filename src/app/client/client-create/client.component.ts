import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Client } from "../client";
import { ClientService } from "../client.service";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.css"]
})
export class ClientComponent {
  clientForm: FormGroup;

  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder
  ) {
    this.clientForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      address: ["", Validators.required]
    });
  }

  createClient(newClient: Client) {
    // Process checkout data here
    console.warn("Your order has been submitted", newClient);

   this.clientForm.reset();
  }
}

